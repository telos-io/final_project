class CodesController < ApplicationController

  def show
    @code = Code.order_by_rand.first
    gon.codeScript = @code.script
    # respond_to do |format|
    #   #format.html
    #   #format.json { render json: @code.script }
    #   format.json { render json: @code, only: [:script] }
    # end

    #render :json @code.script
    #format.js   { render }

  end

end
