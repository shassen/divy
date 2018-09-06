class User < ApplicationRecord
    has_secure_password
    has_many :groups_users
    has_many :groups, through: :groups_users
    has_many :transactions_users
    has_many :transactions, through: :transactions_users
end
