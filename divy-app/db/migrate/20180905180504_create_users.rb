class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username, limit: 30
      t.integer :wallet
      t.string :email
      t.string :password_digest
      t.boolean :admin, default: false

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
