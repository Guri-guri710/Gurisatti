#%% Funcion de la matriz de  confusion
def matconfu (y_val, y_predicha):
    VN=0
    VP=0
    FP=0
    FN=0
    for i in range (len(y_val)):

        if y_val[i]==y_predicha[i,0] and y_val[i]==-1:
            VN+=1
        if y_val[i]==y_predicha[i,0] and y_val[i]==1:
             VP+=1
        if y_val[i]!=y_predicha[i,0] and y_val[i]==-1:
             FN+=1
        if y_val[i]!=y_predicha[i,0] and y_val[i]==1:
             FP+=1
    return VN,VP,FP,FN
    
    

