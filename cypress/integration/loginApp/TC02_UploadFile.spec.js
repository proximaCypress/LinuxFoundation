describe('Working with plugins', function(){
    it('File upload', function(){
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        
        // upload file
        const fileName = 'upload.json';
        
              
        // For cypress-file-upload version > 4.0.0
        cy.get('[type="file"]').attachFile(fileName);

        cy.get('[type="submit"]').click()

        cy.contains("You've uploaded a file.  Your notes on the file were:")
    })
})