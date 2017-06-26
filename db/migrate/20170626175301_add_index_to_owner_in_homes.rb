class AddIndexToOwnerInHomes < ActiveRecord::Migration[5.0]
  def change
    add_index :homes, :owner_id
  end
end
