class Transaction < ApplicationRecord
  belongs_to :group, optional: true
  has_many :transaction_users, dependent: :destroy
  has_many :users, through: :transaction_users
end
