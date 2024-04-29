#Listas para guardar historicos de transferencia
lista_deposito = []
lista_saque = []

#Condições para saque
LIMITE_DIARIO = 3
LIMITE_SAQUE = 500

print('Bem Vindo'.center(20,'='))

while True:
    #Variaveis para calcular totais de depósitos,saques e em conta
    total_depositado = sum(lista_deposito)
    total_sacado = sum(lista_saque)
    saldo = total_depositado - total_sacado

    #Escolha da ação   
    opcao = int(input('''              
Em que podemos lhe ajudar?
[1]Depósito
[2]Saque
[3]Extrato
[0]Encerrar Seção
 '''))

    #Código para opção depósito
    if opcao == 1:
        deposito = float(input('Informe o valor do deposito: R$ '))

        if deposito > 0:
            lista_deposito.append(deposito)
            print(f'✅ Deposito de R$ {deposito:.2f} efetuado com sucesso.')

        else:
            print('❌ Não é possivel depositar este valor, tente novamente')

    #Código para opção saque
    elif opcao == 2: 
        if len(lista_saque) >= LIMITE_DIARIO: #Verifica se o limite de saques diários foi excedido
            print('❌ Limite de saques diários excedido, tente novamente amanhã!')

        elif saldo <= 0: #Verifica se há saldo em conta para realizar o saque
            print('❌ Você não possui saldo em conta!')

        else:
            saque = float(input('Informe o valor do saque: R$ '))
            if saque <= 0: #Verifica se é um valor aceito
                print('❌ Não é possivel sacar este valor, tente novamente!')

            elif saque > LIMITE_SAQUE: #Verifica se o valor não excede o limite
                print(f'❌ Você só pode efetuar saques até R$ {LIMITE_SAQUE:.2f}')

            elif saque > saldo: #Verifica se há saldo suficiente
                print('❌ Saldo insuficiente!')

            else: #Efetua o saque
                lista_saque.append(saque)
                print(f'✅ Saque de R$ {saque:.2f} efetuado com sucesso.')

    #Código para opção de extrato
    elif opcao == 3:
        if saldo > 0: #Saída do saldo e historico de transações se houver
            print('\033[92m' + 'Depositos:' + '\033[0m') #Depositos
            for itensd in lista_deposito:
                print(f'R$ {itensd:.2f}')
                
            print('\033[91m' + 'Saques:' + '\033[0m') #saques
            for itenss in lista_saque:
                print(f'R${itenss:.2f}')
            
            print('\033[93m' + 'Saldo em conta:' + '\033[0m') #Saldo
            print(f'R$ {saldo:.2f}')

        else:   #saída apenas do saldo em conta caso não houver historico de transações
            print('\033[93m'+'Saldo em conta:'+'\033[0m')
            print(f'R$ {saldo:.2f}')

    #Código para a opção de sair do menu
    elif opcao == 0:
        print('Volte sempre!!')
        break

    #Código em caso de não selecionar nenhuma das opções presentes no menu
    else:
        print('Opção inválida!!')
