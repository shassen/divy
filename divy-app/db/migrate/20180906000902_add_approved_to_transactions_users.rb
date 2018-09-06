class AddApprovedToTransactionsUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions_users, :approved, :boolean, :default => false
  end
end
