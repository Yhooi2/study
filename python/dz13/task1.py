class cashier(object):
    count = 0

    def top_up(self, n):
        self.count += n

    def count_1000(self):
        return(self.count//1000)

    def take_away(self, n):
        if self.count - n < 0:
            print('Sorry, not enough money')
        else:
            self.count -= n

def print_sum():
    s = cassa.count_1000()
    print(f'В кассе {s} тысяч рублей')
    
cassa = cashier()
print_sum()
cassa.top_up(int(input('Внесите сумму:')))
cassa.take_away(int(input('Сколько забрать?')))
print_sum()
 
