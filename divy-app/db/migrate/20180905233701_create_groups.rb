class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name
      t.float :wallet
      t.text :description
      t.timestamp :created_at

      t.timestamps
    end
  end
end
