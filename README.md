Automação foi feita focado nos Custom Commands, o qual se assemelha bastante ao Page Objects,
a diferença é que o Cypress compreende como se fossem comandos internos, então são executados
melhores, mais rápidos e eficientes.

Houve um problema nessa nova versão do Cypress onde não aceitei os cookies automaticamente ainda,
tendo que ser feito manualmente esse passo.

No final do processo, foi feito a verificação da tela final.

Para executar o projeto pode-se usar o yarn cypress open e clicar no escopo utilizado.
Dessa forma pode acompanhar os casos de testes serem executados.

Há também a opção de executar os casos detestes sem acompanhá-los, 
verificando apenas se passaram ou falharam executando o comando: yarn cypress run dessa forma também são geradas as evidências.
