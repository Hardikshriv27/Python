#Variable & Data Types     (Part1)

"""name="Hardik"
age=18
price=25.66

print(name)
print("my name is:",name)

print(type(name))"""


"""age = 23
old = False
a = None
print(type(old))
print(type(a))
print(a)"""


"""a=2
b=5
sum=a+b
print(sum)"""

"""a = 3
b = 4.5
sum = a + b 
print(sum)"""

"""a = int("2")
b= 2.5
print(a+b)"""

"""a=int(input("Enter a number:"))
b=int(input("enter a number"))
sum=a+b
print(sum)"""

"""side=int(input("Enter the number: "))
area=side*side
print(area)"""

"""a=float(input("Enter a number :"))
b=float(input("Enter a number :"))
avg=(a+b)/2
print("Avg= ",avg)"""

# Strings and Conditional Statement     (Part2)

"""Escape Sequnce Character"""
"""str1="My name is Hardik. \n I study in PU"
print(str1)"""

"""str1="Har"
str2="dik"
print(str1+str2)"""

"""str="hardik"
print(str[1])"""

"""str="Hardik_Shrivastava"
print(str[1:5])"""

"""str="Apple"
print(str[-4:-1])"""

"""str=input("Enter first name: ")
print(len(str))"""


"""str="Hello, $ I am Coder, $ I like to Code"
print(str.count("$"))"""

"""age=18

if (age >= 18):
    print("elegible for voting")
    print("can vote")"""

"""light="green"

if (light =="red"):
    print("stop")
elif (light == "yellow"):
    print("get ready")
elif (light == "green"):
    print("go")
print("end of code")"""

"""light="pink"

if (light =="red"):   #indentation
    print("stop")
elif (light == "yellow"):
    print("get ready")
elif (light == "green"):
    print("go")
else:
    print("light is broken")

print("end of code")"""

"""marks=int(input("Enter a number: "))

if marks >= 90:
    print("Grade A")
elif (marks >= 80 and marks < 90):
    print("Grade B")
elif (marks >= 70 and marks < 80):
    print("Grade C")
elif (marks >= 60 and marks < 70):
    print("Grade D")
print("marks of the student->",marks)"""

#Nesting (Writing multiple statement in one statement)
"""age = 34
if age >= 18:
    if age >=80:
        print("cannot dive")
    else:    
        print("can drive")
else:
     print("cannot drive")"""

"""
a=input("Emter a number: ")
b=input("Enter a number: ")
c=input("Enter a number: ")

if (a>b and a>c):
    print(a,"is the largest number")
elif (b>a and b>c):
    print(b,"is the largest number")
else:
    print(c,"is the largest number")"""


"""x = int(input("Enter a number: "))  

if(x % 7 == 0):
    print("Multiple of 7")
else:
    print("Not divisible by 7")"""

#List and Tuples

"""marks=[23.4, 34.5, 45.6, 56.7, 67.8]
print(marks[0])
print(marks[1:4])
print(marks)"""

"""stud= ["Hardik",18,"KTM"]
print(stud)
stud[0]="karan"
print(stud)"""

"""marks=[23,24,56,67,89]
print(marks[0:4])"""


"""list = [2,1,3]
list.append(4)
print(list)
list.sort()
print(list)
list.sort(reverse=True)
print(list)
list.reverse()
list.insert(2,2)
print(list)
list.insert(1,1)
print(list)"""

"""list = [2,1,3,4,5,6]
print(list)
list.remove(1)
print(list)
list.pop(2)
print(list)"""

#Tuples
"""tuple = (2,1,3,4,5,6,2,2,4)
print(tuple)
print(tuple[0])
print(tuple[1:4])
print(tuple.index(2))
print(tuple.count(2))"""

"""movies = []
mov1 = input("Enter 1st movie: ")
mov2 = input("Enter 2nd movie: ")
mov3 = input("Enter 3rd movie: ")

movies.append(mov1)
movies.append(mov2)
movies.append(mov3)

print(movies)"""


#loop
"""count = 1
while count <= 5:
    print("hello")
    count += 1

print(count)  """  


"""i = 1
while i<=5:
    print("heloo",i)
    i += 1   
"""

#Print value from 1 to 10
"""i = 1
while i <= 10:
    print(i)
    i += 1
print("loop Ended",)"""

#print value from 10 to 1
"""i = 10
while i >= 1:
    print(i)
    i -= 1
print("loop Ended")"""



#print numbers from 1 to 200
"""i = 1
while i<=100:
    print(i)
    i+=1
print("loop Ended",)"""

#Print number from 100 to 1
"""
i = 100
while i>=1:
    print(i)
    i-=1
print("loop ended")
"""

#Print the multiplication table of a number n(table of 3)
"""i = 1
while i<=10:
    print(3*i)
    i+=1
print("Table of 3")"""

#print any table multiplication table of a number n
"""n = int(input("Enter the number: "))
i=1
while i<=10:
    print(n*i)
    i+=1
print("Table of n")"""

#Print the element of the following list using while loop:
#[1,4,9,16,25,36,49,64,81,100]
"""
nums=[1,4,9,16,25,36,49,64,81,100]
idx = 0
while idx < len(nums):
    print(nums [idx])
    idx+=1"""


#Print a set of given tables in loop
#[ironman, thor, hulk, captain america, black widow]
"""heroes = ["ironman", "thor", "hulk", "captain america", "black widow"]
idx = 0
while idx < len(heroes):
    print(heroes[idx])
    idx+=1"""
#Print places in loop
#[delhi, mumbai, kolkata, chennai, bangalore]
"""places=["delhi", "mumbai", "kolkata", "chennai", "bangalore"]
idx = 0
while idx < len(places):
    print(places[idx])
    idx+=1"""

#Search for a numbeer x in the giiven tuple using a loop:
#(2,4,6,8,10,12,14,16,18,20)
"""
nums = (2,4,6,8,10,12,14,16,18,20)
x = int(input("Enter the number to search: "))
i = 0
while i < len(nums):
    if(nums[i] == x):
        print("number found at index :",i)
    i += 1"""


# Break statement
"""nums = (2,4,6,8,10,12,14,16,18,20)
x = 10
i = 0
while i < len(nums):
    if(nums[i] == x):
        print("number found at index :",i)
        break
    i += 1
print ("loop ended")"""
