describe('Teste de compra de livro', () => {
  
it('Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })

  it('Deve simular a compra de um livro', () => {
   // Simula a compra do livro
        cy.get('[data-id=3]').within(() => {
            cy.contains('Comprar').click()
        })

        // Espera o pop-up de confirmação da compra
        cy.wait(2000) // aguarda o pop-up aparecer

        // Verifica se a mensagem de sucesso aparece no pop-up
        cy.get('.swal-text').should('contain.text', 'Sua compra foi realizada com sucesso')

        // Fecha o pop-up de confirmação
        cy.get('.swal-button').click()
  });
});