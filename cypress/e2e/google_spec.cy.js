describe("Google Search Test", () => {
  it('zayn', () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");

    let found = false;
    // Sonuç sayfalarını kontrol et
    const checkResults = () => {
      cy.get(".g").each(($el) => {
        const link = $el.find("a").prop("href");
        if (link.includes("TBMM")) {
          cy.wrap($el.find("a").find("h3")).click({ force: true }); 
          found = true;
          return false; // Döngüyü kır
        }
      }).then(() => {
        // Eğer sonuç bulunmadıysa bir sonraki sayfaya geç
        if (!found) {
          cy.get("#pnnext").click();
          checkResults(); // Tekrar kontrol et
        }
      });
    };
    checkResults(); // İlk sayfa için kontrol et
  });

  it('zayn', () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");

    let found = false;
    // Sonuç sayfalarını kontrol et
    const checkResults = () => {
      cy.get(".g").each(($el) => {
        const link = $el.find("a").prop("href");
        if (link.includes("hepsiburada")) {
          cy.wrap($el.find("a").find("h3")).click({ force: true }); 
          found = true;
          return false; // Döngüyü kır
        }
      }).then(() => {
        // Eğer sonuç bulunmadıysa bir sonraki sayfaya geç
        if (!found) {
          cy.get("#pnnext").click();
          checkResults(); // Tekrar kontrol et
        }
      });
    };
    checkResults(); // İlk sayfa için kontrol et
  });

  it('serhat', () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");

    let found = false;
    // Sonuç sayfalarını kontrol et
    const checkResults = () => {
      cy.get(".g").each(($el) => {
        const link = $el.find("a").prop("href");
        if (link.includes("ilahiyat")) {
          cy.wrap($el.find("a").find("h3")).click({ force: true }); 
          found = true;
          return false; // Döngüyü kır
        }
      }).then(() => {
        // Eğer sonuç bulunmadıysa bir sonraki sayfaya geç
        if (!found) {
          cy.get("#pnnext").click();
          checkResults(); // Tekrar kontrol et
        }
      });
    };

    checkResults(); // İlk sayfa için kontrol et
  });

  it('serhat', () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");

    let found = false;
    // Sonuç sayfalarını kontrol et
    const checkResults = () => {
      cy.get(".g").each(($el) => {
        const link = $el.find("a").prop("href");
        if (link.includes("bedirhan")) {
          cy.wrap($el.find("a").find("h3")).click({ force: true }); 
          found = true;
          return false; // Döngüyü kır
        }
      }).then(() => {
        // Eğer sonuç bulunmadıysa bir sonraki sayfaya geç
        if (!found) {
          cy.get("#pnnext").click();
          checkResults(); // Tekrar kontrol et
        }
      });
    };

    checkResults(); // İlk sayfa için kontrol et
  });




  xit("Vergi", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.get('a[href*="vknsorgula"]').click();
  });

  xit("Kentsel", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.get('a[href*="Kentsel"]').click();
  });

  xit("Abdüllatif Şener", () => {
    cy.visit("https://www.google.com");
    cy.get('textarea[name="q"]').type("Abdullatif Sofuoğlu");
    cy.get('textarea[name="q"]').type("{enter}");
    cy.url().should("include", "search");
    cy.get('a[href*="sener"]').click();
  });
});
