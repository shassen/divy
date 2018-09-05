class CreateJoinTableUsersTransactions < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :transactions do |t|
      # t.index [:user_id, :transaction_id]
      # t.index [:transaction_id, :user_id]
    end
  end
end
