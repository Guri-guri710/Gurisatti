import numpy as np

#%% Funcion del gradiente
def grad_perc(x,y,alfa,iteraciones):
    dim=np.shape(x)
    unos=np.ones((dim[0],1))
    X=np.concatenate((unos,x),1)    
    pesos=np.random.rand(1,3)
    y=np.reshape(y,(140,1))  
    for i in range (iteraciones):
        new_pesos=pesos-((alfa*(1/dim[1]+1))*(np.transpose((X@np.transpose(pesos))-y)@X))
        pesos=new_pesos
    
    return(pesos)
    
    

  


