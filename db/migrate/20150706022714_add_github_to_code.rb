class AddGithubToCode < ActiveRecord::Migration
  def change
    add_column :codes, :github, :string
  end
end
