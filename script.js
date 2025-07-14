//Storing our transactions in an array

let transactions = [];
let nextId = 1;

function addTransaction() {
    console.log("In addTransactions function");

    //Get values from our form
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value; 
    
    if (!description == null) {
        alert("Please enter a description!");
        return;
    }

    if (!amount || amount <= 0) {
        alert("Please enter a valid amount!")
        return;
    }

    const transaction = {
        id: nextId++,
        description: description,
        amount: amount,
        type: type
    }

    // Adding to list at the top (transaction = [];)
    
    transactions.push(transaction);

    //Clear the form
    document.getElementById("description").value = '';
    document.getElementById("amount").value = '';

    //Update display summary screen

    //Update the summary
    udateSummary()

    //update transactions on recent transaction list
    showTransactions()
}

function updateSummary(){
    let income = 0;
    let expenses = 0;

    //loop trough our lists of transactions

    for (let i=0; i < transactions.length; 1++){
        if (transactions[i].type === "income") {
            income += transactions[i].amount; 
        } else {
            expenses += transactions[i].amount;
        }
    }

    //Balance
    const balance = income - expenses;

    //Update the display
    document.getElementById("totalIncome").textContent = "R" + income;
    document.getElementById("totalExpenses").textContent =  "R" + expenses;

    const balanceElement = document.getElementById("balance");
    balanceElement.textContent = "R" + balance;

    if (balance < 0) {
        balanceElement.className = "amount balance negative";
    } else {
        balanceElement.classNmae = "amount balance";
    }
}

function showTransactions() {
    const container = document.getElementById("transactionsList");

    //If we have no transactions

    if (transactions.length === 0) {
        container.innerHTML = "<div class="empty-message"> <p> No transactions yet. Add one above!</p></div>"
        return;
    }

    //Build html for all our transactions

    let html = '';
    for(let i = transactions.length - 1; i >= 0; i -- ) {
        const t = transactions[i];

        html += '
            <div class="transaction ${t.type}-item">
            <div class="transaction-info">
                <strong>${t.description}</strong>
                <small>${t.type}</small>
            <div>

             <div class="transaction-amount ${t.type}">
                 ${t,type === 'income' ? + "+": "-"}R${t.amount}
                
                
                </div> 
                <button class="delete-btn" onclick="deleteTransaction(${t.id}">Delete</button>
            <div>      


        '
    }
}

container.innerHTML = html;

function deleteTransaction(id) {
    //Find the specific transaction using ID and remove it
    for (let i=0; i < transactions.length; i++) {
        if (transaction[i].id === id) {
            transactions.splice(i, 1);
            beak;
        }
    }

    //Update he display
    updateSummary();
    showTransactions();
}
updateSummary();
showTransactions();