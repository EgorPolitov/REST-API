{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-23.05";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
  };

  outputs = { self, nixpkgs, devenv, systems, ... }@inputs:
    let forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in {
      devShells = forEachSystem (system:
        let pkgs = nixpkgs.legacyPackages.${system};
        in {
          default = devenv.lib.mkShell {
            inherit inputs pkgs;
            modules = [{
              packages = with pkgs; [
                mariadb
              ];
              # https://devenv.sh/reference/options/
              services.mysql = {
                enable = true;
                package = pkgs.mariadb;
                initialDatabases = [{ name = "app"; }];
                ensureUsers = [
                  {
                    name = "app";
                    password = "";
                    ensurePermissions = { "app.*" = "ALL PRIVILEGES"; };
                  }
                ];
                settings.mysqld = {
                  "sql_require_primary_key" = "on";
                };

              };

              # users.mysql = {
              #   passwordFile = "/run/secrets/mysql-passwd";
              #   host = "localhost";
              # };

            }];

          };
        });
    };
}
