class TransactionUser < ApplicationRecord
    belongs_to :user
    belongs_to :txn, foreign_key: "transaction_id", class_name: "Transaction"
end
