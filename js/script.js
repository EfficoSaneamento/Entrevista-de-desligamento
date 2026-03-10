const API_URL = "https://script.google.com/macros/s/AKfycbzuaKt0Nt-sIVtqnasXyWxs8A0E5m49wu6pEoxlfSxnl0a_9mjx0EA3a4meGH6eM6v4Zw/exec";

/* =========================
   COLETAR DADOS DO FORMULÁRIO
========================= */

function coletarDados() {

  const dados = {
    dataRegistro: new Date().toISOString(),

    dataDesligamento: document.querySelector('[data-field="dataDesligamento"]')?.value || "",
    dataEntrevista: document.querySelector('[data-field="dataEntrevista"]')?.value || "",

    nome: document.querySelector('[data-field="nome"]')?.value || "",
    cargo: document.querySelector('[data-field="cargo"]')?.value || "",
    departamento: document.querySelector('[data-field="departamento"]')?.value || "",

    tipoDesligamento: document.querySelector('[data-field="tipoDesligamento"]')?.value || "",
    motivoDesligamento: document.querySelector('[data-field="motivoDesligamento"]')?.value || "",
    fatorDetalhado: document.querySelector('[data-field="fatorDetalhado"]')?.value || "",

    q1: document.querySelector('[data-field="q1"]')?.value || "",
    q2: document.querySelector('[data-field="q2"]')?.value || "",
    q3: document.querySelector('[data-field="q3"]')?.value || "",
    q4: document.querySelector('[data-field="q4"]')?.value || "",
    q5: document.querySelector('[data-field="q5"]')?.value || "",
    q6: document.querySelector('[data-field="q6"]')?.value || "",
    q7: document.querySelector('[data-field="q7"]')?.value || "",
    q8: document.querySelector('[data-field="q8"]')?.value || "",
    q9: document.querySelector('[data-field="q9"]')?.value || "",
    q10: document.querySelector('[data-field="q10"]')?.value || "",
    q11: document.querySelector('[data-field="q11"]')?.value || "",
    q12: document.querySelector('[data-field="q12"]')?.value || "",
    q13: document.querySelector('[data-field="q13"]')?.value || "",
    q14: document.querySelector('[data-field="q14"]')?.value || "",
    q15: document.querySelector('[data-field="q15"]')?.value || "",
    q16: document.querySelector('[data-field="q16"]')?.value || "",

    comentarioFinal: document.querySelector('[data-field="comentarioFinal"]')?.value || "",
    obsRH: document.querySelector('[data-field="obsRH"]')?.value || ""
  };

  return dados;
}

/* =========================
   ENVIAR PARA APPS SCRIPT
========================= */

async function enviarFormulario() {

  const dados = coletarDados();

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    });

    const resultado = await response.json();

    if (resultado.status === "ok") {

      alert("Entrevista registrada com sucesso!\nID: " + resultado.id);

      document.getElementById("formEntrevista").reset();

    } else {

      alert("Erro ao registrar entrevista.");

    }

  } catch (erro) {

    alert("Erro ao conectar com o servidor.");

  }

}

/* =========================
   BOTÃO ENVIAR
========================= */

document.getElementById("btnEnviar").addEventListener("click", function(e) {
  e.preventDefault();
  enviarFormulario();
});