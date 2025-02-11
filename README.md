# Sistema de Gerenciamento Bancário - Bootcamp DIO Python

Este é um sistema simples de gerenciamento bancário desenvolvido durante o bootcamp de Python da DIO (Digital Innovation One). O sistema permite que os usuários possam realizar depósitos, saques, consultar extratos, criar contas de usuário e contas correntes, tudo em um ambiente interativo.

## Funcionalidades

O sistema oferece as seguintes funcionalidades:

1. **Depósito**: Permite realizar depósitos em uma conta.
2. **Saque**: Permite realizar saques, respeitando um limite de valor e número de saques diários.
3. **Extrato**: Exibe todos os depósitos e saques realizados, além do saldo atual.
4. **Criar conta de usuário**: Cria um novo usuário com nome, CPF, data de nascimento, endereço e senha.
5. **Criar conta corrente**: Gera uma conta corrente para o usuário existente com base no CPF.
6. **Encerrar Sessão**: Finaliza o sistema.

## Estrutura do Código

O código é composto por diversas funções que simulam as operações de um banco, como depósitos, saques e extratos. As funções principais são:

- **menu()**: Exibe as opções de menu para o usuário escolher a operação desejada.
- **calcular_saldo()**: Calcula o saldo total da conta com base nos depósitos e saques realizados.
- **executar_deposito()**: Executa a operação de depósito, adicionando o valor à lista de depósitos.
- **executar_saque()**: Realiza a operação de saque, com restrições de valor e número de saques diários.
- **exibir_extrato()**: Exibe o extrato completo da conta, mostrando depósitos, saques e saldo.
- **criar_usuario()**: Cria um novo usuário com as informações fornecidas, como nome, CPF, data de nascimento e endereço.
- **criar_conta_corrente()**: Cria uma conta corrente para um usuário existente com base no CPF.

## Como Usar

1. Clone o repositório ou baixe o arquivo Python.
2. Execute o script utilizando um ambiente de desenvolvimento Python.
3. O sistema pedirá para você escolher uma opção do menu.
4. Para interagir com o sistema, basta seguir as instruções fornecidas durante a execução do código.

### Exemplo de Execução

Olá, seja muito bem-vindo

Em que podemos lhe ajudar?

[1]Depósito <br>
[2]Saque <br>
[3]Extrato <br>
[4]Criar conta de usuário <br>
[5]Criar conta corrente <br>
[0]Encerrar Seção <br>

Escolha uma opção: 1 <br>
Informe o valor a ser depositado: R$ 100 <br>
Depósito de R$ 100.00 efetuado com sucesso! <br>


## Tecnologias Utilizadas

- Python 3.x
- Funções de manipulação de listas e entradas do usuário
- Estruturas de controle de fluxo (condicionais e loops)

## Contribuições

Sinta-se à vontade para contribuir com o projeto, sugerindo melhorias, corrigindo erros ou adicionando novas funcionalidades.

## Licença

Este projeto é de código aberto e distribuído sob a [MIT License](LICENSE).
