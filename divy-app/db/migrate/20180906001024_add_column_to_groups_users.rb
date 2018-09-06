class AddColumnToGroupsUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :groups_users, :admin, :boolean, :default => false
    add_column :groups_users, :approved, :boolean, :default => false
  end
end
