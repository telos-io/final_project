class AddAuthorToCode < ActiveRecord::Migration
  def change
    add_column :codes, :author, :string
  end
end
