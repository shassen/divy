class User < ApplicationRecord
    has_secure_password
    has_and_belongs_to_many :transactions, optional: true
    has_and_belongs_to_many :groups, optional: true
end
