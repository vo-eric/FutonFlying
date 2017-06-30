class AddAttachmentAvatarToHosts < ActiveRecord::Migration
  def self.up
    change_table :hosts do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :hosts, :avatar
  end
end
