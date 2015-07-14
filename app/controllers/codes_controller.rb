class CodesController < ApplicationController

  def show
    @code = Code.order_by_rand.first
    gon.codeScript = @code.script
  end

end
