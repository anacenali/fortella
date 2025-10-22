// Máscara de telefone
document.getElementById("telefone")?.addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, ""); // remove tudo que não é número
  
    if (value.length > 11) value = value.slice(0, 11);
  
    if (value.length <= 10) {
      e.target.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      e.target.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  });
  
  // Validação de senha
  document.getElementById("formCadastro")?.addEventListener("submit", function(e) {
    e.preventDefault();
  
    const senha = document.getElementById("senhaCadastro").value;
    const confirmar = document.getElementById("confirmarSenha").value;
  
    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }
  
    alert("Cadastro realizado com sucesso!");
  });
  