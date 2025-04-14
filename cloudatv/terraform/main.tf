provider "azurerm" {
  features {}
  subscription_id = "9ec43da6-9f07-4f50-9286-019eaac5cc3b"
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-prontuario"
  location = "eastus"
}

resource "azurerm_service_plan" "plan" {
  name                = "asp-prontuario"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Windows"
  sku_name            = "F1"
}

resource "azurerm_windows_web_app" "app" {
  name                = "app-prontuario123"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  service_plan_id     = azurerm_service_plan.plan.id

  site_config {
    always_on = false
  }

  app_settings = {
    "WEBSITE_RUN_FROM_PACKAGE" = "1"
  }
}
