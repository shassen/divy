class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :amount
      t.string :location
      t.text :description
      t.boolean :approved
      t.references :group, foreign_key: true
      t.timestamp :created_at

      t.timestamps
    end
  end
end
