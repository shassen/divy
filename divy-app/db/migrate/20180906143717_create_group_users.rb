class CreateGroupUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :group_users do |t|
      t.belongs_to :user, index: true
      t.belongs_to :group, index: true
      t.boolean :approved, default: false
      t.boolean :admin, default: false
      t.timestamps
    end
  end
end
