class CodesController < ApplicationController

  before_action :authenticate_user!, only: [:show]

  def index
  end

  def show
    @code = Code.order_by_rand.first
    gon.codeScript = @code.script
  end

end
