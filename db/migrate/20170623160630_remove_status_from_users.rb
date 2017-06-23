class RemoveStatusFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :status
  end
end
