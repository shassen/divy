class AddAdminToTransactionsUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions_users, :admin, :boolean, :default => false
  end
end
