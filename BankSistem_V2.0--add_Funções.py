
#  Função para exibir o menu

def menu():
    return int(input('''              
[1]Depósito
[2]Saque
[3]Extrato
[4]Criar conta de usuário
[5]Criar conta corrente                     
[0]Encerrar Seção
 '''))

#  Função para fazer o calculo do saldo em conta

def calcular_saldo(depositos, saques):
    total_depositado = sum(depositos)
    total_sacado = sum(saques)
    return total_depositado - total_sacado

#  Função para efetuar um deposito

def executar_deposito(valor_deposito, /):
    if valor_deposito <= 0:
        print('Valor de deposito inválido!!')
    else:
        historico_deposito.append(valor_deposito)
        print(f'Deposito de R$ {valor_deposito:.2f} efetuado com sucesso!')

#  Função para executar um saque se estiver tudo correto

def executar_saque(*, valor_saque, saldo_disponivel):
    LIMITE = 500
    MAX_SAQUE_DIARIO = 3

    if valor_saque <= 0:
        print('Valor de saque inválido!!')

    elif valor_saque > saldo_disponivel:
        print('Você não possui saldo suficiente!!')

    elif valor_saque > LIMITE:
        print(f'Seu limite de saque é de {LIMITE:.2f} até o momento!')

    elif len(historico_saque) >= MAX_SAQUE_DIARIO:
        print(f'Limite diário excedido!!\nVocê só pode efetuar até {MAX_SAQUE_DIARIO} saques por dia!')  
    else:
        historico_saque.append(valor_saque)
        print(f'Saque de R$ {valor_saque:.2f} efetuado com sucesso!!')


#   Função para exibir todo o historico de transações e mostrar o saldo atual

def exibir_extrato(saldo,/ ,* ,depositos, saques):
    def repetir_dp(depositos):
        for i in depositos:
            print(f'R$ {i:.2f}')

    def repetir_sq(saques):
        for i in saques:
            print(f'R$ {i:.2f}')
    

    print('========  EXTRATO  ========\nDEPOSITOS:')
    repetir_dp(depositos)
    print('\nSAQUES:')
    repetir_sq(saques)
    print('\n======= SALDO ATUAL =======')
    print(saldo)

#  Função para criar um usuario

def criar_usuario():

    nome = input('Informe seu nome completo: ')
    while True:
            cpf = (input('Informe seu numero de CPF (Sem pontos e traços): '))

            #  Verifica se o cpf ja existe e se foi digitado corretamente
            if cpf.isdigit(): 
                if cpf in lista_usuarios:
                    print('CPF já existente!')
                else:
                    break
            else:
                print('Digite apenas números!')

    while True:       
            data_nascimento = input('Informe sua data de nascimento (dd/mm/aaaa): ')

            #  Verifica se a data foi informada como pedido
            if data_nascimento.replace('/','').isdigit() and '/' in data_nascimento: 
                break
            else:
                print('Faça como no exemplo: 11/11/1111')

    
    rua = input('Informe seu endereço\nRua: ')
    bairro = input('Bairro: ')

    while True:
        cidade = input('Cidade/ UF: ')

        #  Verifica se a data foi informada como pedido
        if '/' in cidade:         
            break
        else:
            print('Faça como pedido no exemplo!\n (Pedro II/PI)')
    endereco = f'{rua} - {bairro} - {cidade}'
                        
    senha = input('Informe uma senha: ')

    usuario = { cpf : {'nome ' : nome , 'data_nacimento' : data_nascimento , 'endereco' : endereco , 'senha' : senha }}
    
    print('Usuario criado com sucesso!')

    #  Adiciona o usuario a lista de usuarios
    return lista_usuarios.update(usuario)      
    
#  Função para gerar a conta

def criar_conta_corrente():

    #  Função para fornecer um numero de conta diferente para cada usuario

    def gerar_conta():
        agencia = '0001'
        num_conta = str(len(lista_contas) + 1).zfill(6)
        num_u = '001'

        if int(num_conta) > 999999:
            num_u = str(int(num_u)+1).zfill(3)
            num_conta = '000000'
        
        conta = f'{agencia} {num_conta} {num_u}'

        contas_list = {cpf:{'conta' : conta}}
        

        #  Verifica se o CPF ja está na lista de usuários  
        if cpf in lista_usuarios:        
           
            #  Verifica se o usuario ja tem uma conta e adiciona a nova
            if 'conta' in lista_usuarios[cpf]:    
                lista_usuarios[cpf]['conta'].append(conta) 

            #  Adiciona a conta ao usuario caso seja a primeira
            else:                                 
                lista_usuarios[cpf]['conta'] = [conta]         

            #  Adiciona a conta a uma lista com todas as contas, permitindo a contabilização
            lista_contas.append(contas_list)       

            print('Conta criada com sucesso!')
            print(f'\nSeu número de conta é:\n{conta}')

        else:
            print('usuario inexistente')


        
    
    #  Pede o cpf para que se possa prosseguir com a criação de contas
    cpf = (input('Informe seu numero de CPF (Sem pontos e traços): '))   
    if cpf.isdigit():
        gerar_conta()
            
    else:
        print('Digite apenas números!')
        
#   Definição das listas para guardar os dados ao longo do código
lista_contas = []
lista_usuarios = {}
historico_deposito = []
historico_saque = []

#   Inicio do código e chamada de funções baseadas nas escolhas do usuario

print('Olá, seja muito bem vindo\n\nEm que podemos lhe ajudar?')

while True:

    escolha_acao = menu()
    saldo_atual = calcular_saldo(historico_deposito, historico_saque)

    if escolha_acao == 1:
        depositar = float(input('Informe o valor a ser depositado: R$'))
        executar_deposito(depositar)


    elif escolha_acao == 2:

        sacar = float(input('Informe o valor a ser sacado: R$'))
        executar_saque(valor_saque = sacar, saldo_disponivel = saldo_atual)
        
    elif escolha_acao == 3:
        exibir_extrato(saldo_atual, depositos = historico_deposito, saques = historico_saque)
        
    elif escolha_acao == 4:
        criar_usuario()
    
    elif escolha_acao == 5:
        criar_conta_corrente()

    elif escolha_acao == 0:
        print('Obrigado, Volte sempre')
        break

    else:
        print('!!OPÇÃO INVÁLIDA!!\n  Repita a ação: ')