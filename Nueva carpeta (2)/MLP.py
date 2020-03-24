#%% Creando MLP
from sklearn neural_network import MLPRegressor 
Reg =MLPRegressor(activation='tanh',solver='sgd',hidden_layer_sizes=(2,),
                  learning_rate=('constant'),learning_rate_init60,max_iter=5)
Reg.fit(x_train,y_train)
y_predicha=Reg.predict(x_val)
#activation: IDENTIFY LOGISTIC TANH RELU
#Solver: Lbfgs sgd adam
#Learning Rate: Constant invscaling adaptive

