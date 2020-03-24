#%% Librerias
import numpy as np
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPRegressor 


#%% Funciones creadas
import preprocesamiento
import gradiente
import confusion
from sklearn import svm, datasets
import pandas as pd
import seaborn as sn
from sklearn import svm


#%% Cronstruccion de la base de datos
datos=pd.read_csv('CASP.csv')
df=pd.DataFrame(datos)
quimica = DataFrame()
etiquetas=quimica.target


xls=datos[0:200, 13:15]
yls=etiquetas[0:200]

x=np.array(xls)
y=np.array(yls)

y[y==0]=-1
tipo_contaminacion=quimica.target_names[0:2]
#%% Creando MLP
Reg = MLPRegressor(activation='tanh',solver='sgd',hidden_layer_sizes=(2,),
                  learning_rate='constant',learning_rate_init=60,max_iter=5)
Reg.fit(x_train,y_train)
y_predicha=Reg.predict(x_val)
#activation: IDENTIFY LOGISTIC TANH RELU
#Solver: Lbfgs sgd adam
#Learning Rate: Constant invscaling adaptive


#%% Separacion de los datos y normalizacion
xn=preprocesamiento.normalizar(x)
x_train,y_train,x_val,y_val=preprocesamiento.particion_7030(xn,y)

#%% Gradiente
pesos=gradiente.grad_perc(x_train,y_train,0.002,100000)



#%% Clasificacion utilizando el modelo
dim=np.shape(x_val)
unos=np.ones((dim[0],1))
X_val=np.concatenate((unos,x_val),1)   
y_predicha = np.sign(X_val@np.transpose(pesos))

#%% Evaluacion de desempeño del modelo 
VN,FP,FN,VP= confusion.matconfu(y_val, y_predicha)
print(f"{VN},{FP},{FN},{VP}")
matriz=np.array("[VN,FP,FN,VP]")
pre=(VN+VP)/(VN+FP+FN+VP)
sen=VP/(VP+FN)
esp=VN/(VN+FP)
f1score=(2*pre*sen)/(pre+sen)
#%% Graficas Recordar que estas solo funcionan para 2D
w0=pesos[0,0]
w1=pesos[0,1]
w2=pesos[0,2]
x1=1
x2=0

y1= -(w0/w2)-((w1/w2)*x1)
y2= -(w0/w2)-((w1/w2)*x2)
X11=np.array([x1,x2])
Y11=np.array([y1,y2])

plt.scatter(x_val[:,0], x_val[:,1],c=y_val)
plt.plot(X11,Y11,'g',linewidth=3)
plt.xlabel(cancer.feature_names[13])
plt.ylabel(cancer.feature_names[15])
plt.title('AIR QUALITY')


y_val[y_val==-1] = 0
y_predicha[y_predicha==-1] = 0
#GRAFICAR MATRIZ de CONFUSION



plt.show()

#%% Mostrar desempeño
print(f"La precision     es del {pre*100} %")
print(f"La sensibilidad  es del {sen*100} %")
print(f"La especificidad es del {esp*100} %")
print(f"el puntaje f1 es del {f1score*100} %")

print(matriz)
y_pred=[]

for i in range(len(y_predicha)):
    y_pred.append(int(float(y_predicha[i][0])))


print(f"val={type(y_val)} , predicha={type(y_pred)}")

y_val=np.array(y_val)
y_pred=np.array(y_pred)
print(f"val={type(y_val)} , predicha={type(y_pred)}")

df_confusion = pd.crosstab(y_val, y_pred, rownames=['Actual'], colnames=['Predicted'], margins=True)
print(df_confusion)

data = {'y_Predicha': y_pred,
        'y_val':    y_val
        }

df = pd.DataFrame(data, columns=['y_val','y_Predicha'])
confusion_matrix = pd.crosstab(df['y_val'], df['y_Predicha'], rownames=['val'], colnames=['Predicha'])
plt.title('MATRIZ DE CONFUSION NORMALIZADA')
sn.heatmap(confusion_matrix, annot=True)
