class CodesController < ApplicationController

  before_action :authenticate_user!, only: [:show]

  def new
    #@code = Code.order_by_rand.first
  end

  def show
    @user = current_user.id
    @code = Code.order_by_rand.first
    gon.codeScript = @code.script
    gon.codeScriptId = @code.id
    gon.currentUser = current_user.id
  end

end
