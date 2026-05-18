from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def cartao():
    return render_template("cartao.html")

@app.route("/pagamento")
def pagamento():
    return render_template("pagamentoCartao.html")

if __name__ == "__main__":
    app.run(debug=True)