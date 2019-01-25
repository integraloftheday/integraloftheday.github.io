
import random

components =["(#)/(#)","(#)+(#)","(#)-(#)","(#)*(#)","#**#","cos(#)","sin(#)"
,"tan(#)","sec(#)","csc(#)","cot(#)","(#)/(#)","(#)+(#)","(#)-(#)","(#)*(#)"
,"#**#","x","x","x","x","x","x","exp(#)","pi",
"1","2","3","4","5","6","7","8","9","10"]

def equation(num,lengthmin,lengthmax,function,possible):
    """Generates a random equation
    num=number of equations generated
    lengthmin=minumum length of the equation
    lengthmax=maximum length of the equation
    function=(bool,variable) if you want a specific variable in the solution (must be in possible)
    possible=possible equation components""" 
    equationList=[]
    equation=random.choice(possible)
    #print(equation)
    while(len(equationList)<num):
        #print("test1")
        equation=random.choice(possible)
        while("#" in equation ):
            new=(random.choice(possible))
            #print("test2")
            #print(new)
            #print(type(new))
            equation=equation.replace("#",str(new),1)
            #print(equation)
            if function[0]==True:
                if(len(equation)>lengthmin) and len(equation)<lengthmax and (not("#" in equation)) and (function[1] in equation):
                    #print("solved")
                    equationList.append(equation)
            else:
                if(len(equation)>lengthmin) and len(equation)<lengthmax and (not("#" in equation)):
                    #print("solved")
                    equationList.append(equation)
    return(equationList)
#print(equation(1,1,100000,(True,'x'),components))
