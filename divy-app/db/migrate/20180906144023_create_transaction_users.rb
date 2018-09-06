class CreateTransactionUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :transaction_users do |t|
      t.belongs_to :user, index: true
      t.belongs_to :transaction, index: true
      t.boolean :approved, default: false
      t.boolean :admin, default: false
      t.timestamps
    end
  end
end
