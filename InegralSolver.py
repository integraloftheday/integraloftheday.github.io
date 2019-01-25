
from __future__ import division
from EquationGenerator import equation 
from sympy import *
from sympy import init_printing
import time 
import timeout_decorator

x, y, z, t = symbols('x y z t')
k, m, n = symbols('k m n', integer=True)
f, g, h = symbols('f g h', cls=Function)
components =["(#)/(#)","(#)+(#)","(#)-(#)","(#)*(#)","#**#","cos(#)","sin(#)"
,"tan(#)","sec(#)","csc(#)","cot(#)","(#)/(#)","(#)+(#)","(#)-(#)","(#)*(#)"
,"#**#","x","x","x","x","x","x","exp(#)","pi",
"1","2","3","4","5","6","7","8","9","10"]
@timeout_decorator.timeout(5, timeout_exception=StopIteration)
def integrateFunction(equation,definite,variable):
    """equation=equation in a string 
    definite= (True or False, lower bound, upper bound"""
    if definite[0]== True:
        print("yehaw")
        return integrate(equation, (eval(variable),definite[1],definite[2]))
    else: 
        return integrate(equation, eval(variable))


ListofEquations = equation(1000,10,100,(True,'x'),components)
final=[]
print("done")
if __name__ == '__main__':
    for eq in ListofEquations:
        try:
            final.append((str(eq),str(integrateFunction(eval(eq),(False,0,0),'x'))))
        except:
            continue
print("EQUATIONS") 
for i in final:
    print(i[0])
print("Latex Equations")
for q in final:
    print(latex(eval(q[0])))
print("SOLUTIONS NOW")
for z in final:
    print(z[1])
print("SOLUTIONS LATEX")
for t in final:
    print(latex(eval(t[1])))
