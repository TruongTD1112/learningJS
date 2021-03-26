import sys;
number = sys.stdin.readline();
data = {};
# for x in range(int(number)) :
#     string = sys.stdin.readline().split(" ");
#     name = string[0];
#     phone = string[1];
#     data[name] = phone;
# for x in range(int(number)) :
#     name= sys.stdin.readline();
#     if(data.has_key(name)) : print(data[name]);
#     else : print("khong co");
data["1"] = "tran dinh truong";
if(data.has_key("1")) : print("dung");