DATA SEGMENT
ADR DB 9,-1,3,-5,4,0,5,-5,7
count DB ($-ADR)
SUM DB ?,?,?
DATA ENDS

CODE SEGMENT
ASSUME CS:CODE,DS:DATA
BEGIN:MOV AX,DATA
MOV DS,AX
LEA BX,ADR
XOR CX,CX
XOR DX,DX
MOV DL,count

LOP:MOV AH,[BX]
INC BX
CMP AH,0
JZ L1
JL L2
INC CH
JMP DOWN
L1:INC CL
JMP DOWN
L2:INC DH
DOWN:DEC DL
JNZ LOP
MOV SUM,CL
MOV SUM+1,CH
MOV SUM+2,DH
MOV AH,4CH
INT 21H
CODE ENDS
    END BEGIN