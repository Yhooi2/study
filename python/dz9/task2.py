import collections

def create():
    last = collections.deque(pets, maxlen=1) [0]
    name = input("Имя питомца:")
    pets[last + 1][name] = {}
    pets[last + 1][name]["Вид питомца"] = input("Вид питомца:")
    pets[last + 1][name]["Возраст питомца"] = input("Возраст питомца:")
    pets[last + 1][name]["Имя владельца"] = input("Имя владельца:")

def read():
    pets_list()
    ID = input('Enter ID: ')
    print(get_pet(ID))
    if get_pet(ID):
        key = pets[ID][pets[ID]]
        age = key["Возраст питомца"]
        print(f'Это {key["Вид питомца"]} по кличке "{pets[ID]}".',
        f'Возраст питомца: {age} {get_suffix(age)}.',
        f'Имя владельца: {key["Имя владельца"]}')
    else:
        print("ID не найден")

def update():
    ID = input('Введите ID питомца:')
    if get_pet(ID):
        name = pets[ID]
        key = input(f'Введите, что хотите изменить в {name}:') 
        value =  input('Введите новое значение')
        pets[ID][name][key] = value
    else:
       print('Животное с таким ID не зарегестрировано')

def delete(ID):
    if get_pet(ID):
        pets.pop(ID)
    else:
        print('No found ID')
def get_pet(ID):
    print(pets)
    return ID in pets
        
def get_suffix(age):
    if age % 10 == 1 and age != 11:
        return 'год'
    if age % 10 in range(2, 5):
        return 'года'
    return 'лет'

def pets_list():
    last = collections.deque (pets, maxlen=1)[0]
    for i in range(1, last + 1):
        print(i, list(pets[i].keys()))

pets = {
    1 :
        {"Мухтар" : {"Вид питомца" : "Собака",
            "Возраст питомца" : 9,
            "Имя владельца" : "Павел"
            },
        },
    2 :
        {"Каа" : {"Вид питомца" : "желторотый питон",
            "Возраст питомца" : 19,
            "Имя владельца" : "Саша"
            },
        },
    }


while 1:
    command =  input('Enter command:')
    if command == 'create':
        create()
    elif command == 'read':
        read()
    elif command == "update":
        update()
    elif command == "delete":
        delete()
    elif command == 'stop':
        break
    else:
        print('uncorrect command')
