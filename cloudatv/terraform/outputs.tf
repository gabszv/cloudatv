output "app_url" {
  description = "URL do App Web publicado na Azure"
  value       = "https://${azurerm_windows_web_app.app.default_hostname}"
}
