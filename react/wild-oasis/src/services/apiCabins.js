import supabase, { supabaseUrl } from "./supabase";

export async function editCabin(cabin) {
  console.log(cabin);
  const hasImagePath = cabin.image?.startsWith?.(supabaseUrl);
  const image = hasImagePath ? cabin.image : cabin.image[0];
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
  console.log(data);
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

export async function createCabin(newCabin) {
  //https://owpvwvddsrqrokvwftjs.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  const image = newCabin.image[0];
  const imageName = Math.random() + image.name.replace("/", "");
  const imagePath =
    supabaseUrl + "/storage/v1/object/public/cabin-images//" + imageName;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

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
  console.log(data);

  return data;
}

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { date, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
  return date;
}
