class CodesController < ApplicationController

  def show
    @code = Code.order_by_rand.first
    render json: @code.script
  end

end
