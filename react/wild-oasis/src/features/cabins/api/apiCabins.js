import supabase, { supabaseUrl } from "../../../services/supabase";

// Copy
export async function copyCabin(cabinForCopy) {
  const { id: _, ...cabin } = cabinForCopy;
  console.log(cabin);
  const { data, error } = await supabase
    .from("cabins")
    .insert({ ...cabin, name: "Copy_" + cabin.name })
    .eq("id", cabin.id);

  if (error) {
    throw new Error("Cabin could not be copited");
  }

  return data;
}

// Update
export async function editCabin(cabin) {
  const hasImagePath =
    typeof cabin.image === "string" && cabin.image.includes(supabaseUrl);
  const image = hasImagePath ? cabin.image : cabin.image[0];
  console.log(cabin.image, supabaseUrl, hasImagePath);
  const imageName = hasImagePath
    ? cabin.image.split("/").pop()
    : Math.random() + image.name.replace("/", "");
  const imagePath = hasImagePath
    ? cabin.image
    : supabaseUrl + "/storage/v1/object/public/cabin-images//" + imageName;

  const { data, error } = await supabase
    .from("cabins")
    .update({ ...cabin, image: imagePath })
    .eq("id", cabin.id)
    .select()
    .single();
  if (error) {
    throw new Error("Cabin could not be edited");
  }
  if (!hasImagePath) {
    const { error: errorStorage } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, image);

    if (errorStorage) {
      await deleteCabin(data.id);
      console.log(errorStorage);
      throw new Error(
        "Cabin image could not be uploaded and the cabin  was not created",
      );
    }
  }

  return data;
}

//Create
export async function createCabin(cabin) {
  const image = cabin.image[0];
  const imageName = Math.random() + image.name.replace("/", "");
  const imagePath =
    supabaseUrl + "/storage/v1/object/public/cabin-images//" + imageName;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...cabin, image: imagePath }]);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be added");
  }

  const { error: errorStorage } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, image);

  if (errorStorage) {
    deleteCabin(data.id);
    console.log(errorStorage);
    throw new Error(
      "Cabin image could not be uploaded and the cabin  was not created",
    );
  }
  return data;
}

// Delete
export async function deleteCabin(id) {
  const { date, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  return date;
}

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
