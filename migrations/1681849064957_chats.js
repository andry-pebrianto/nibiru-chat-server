/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("chats", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
    },
    sender: {
      type: "uuid",
      notNull: true,
    },
    receiver: {
      type: "uuid",
      notNull: true,
    },
    chat_type: {
      type: "VARCHAR(10)",
      default: "text",
    },
    chat: {
      type: "VARCHAR(500)",
      notNull: true,
    },
    date: {
      type: "timestamp with time zone",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.sql(`
    ALTER TABLE chats
    ADD COLUMN is_deleted BOOLEAN DEFAULT FALSE;
  `);

  pgm.addConstraint(
    "chats",
    "fk-chats.sender-users.id",
    "FOREIGN KEY(sender) REFERENCES users(id) ON DELETE CASCADE",
  );
  pgm.addConstraint(
    "chats",
    "fk-chats.receiver-users.id",
    "FOREIGN KEY(receiver) REFERENCES users(id) ON DELETE CASCADE",
  );
};

exports.down = (pgm) => {
  pgm.dropConstraint("chats", "fk-chats.sender-users.id");
  pgm.dropConstraint("chats", "fk-chats.receiver-users.id");
  pgm.dropTable("chats");
};
