from flask import Flask, render_template, request,redirect, url_for
app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def SpaceY():
    
    return render_template ('SpaceY.html')

@app.route ('/signup', methods=['POST'])
def signup():
    if request.method == 'POST':
        name=request.form['name']
        email=request.form['email']
        return "Hello" + name + ", thank you for registering with SpaceY as a potential astronaut. We will get back to you on the outcome on: " + email+ "."
    


if __name__ == "__main__":
    app.run(debug=True)