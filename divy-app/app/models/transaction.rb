class Transaction < ApplicationRecord
  belongs_to :group, optional: true
  has_many :transactions_users
  has_many :users, through: :transactions_users
end
