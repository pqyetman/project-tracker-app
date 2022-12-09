class CustomersController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  # GET /customers
  def index
    customers = Customer.all.order(:name)
    render json: customers
  end

  # GET /customers/1
  def show
    customer = Customer.find(params[:id])
    render json: customer
  end

  # POST /customers
  def show
    customer = Customer.find(params[:id])
    render json: customer
  end

  # POST /employees
  def create        
    customer = Customer.create!(customer_params)
    render json: customer, status: :created       
  end 

  def update
    customer = Customer.find(params[:id])       
    customer.update!(customer_params)
    render json: customer, status: :ok    
  end 

  # DELETE /customers/1
  def destroy
    @customer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:name, :address)
    end
end
