"""Initial migration

<<<<<<<< HEAD:migrations/versions/3bbb9931c60d_initial_migration.py
Revision ID: 3bbb9931c60d
Revises: 
Create Date: 2023-09-22 22:09:29.231845
========
Revision ID: 77c43eb9dcec
Revises: 
Create Date: 2023-09-18 18:21:06.442307
>>>>>>>> 3f5828ab3127a76a4b11533db72f5633b34112ed:migrations/versions/77c43eb9dcec_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3bbb9931c60d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('bicycles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('manufacturer', sa.String(length=100), nullable=True),
    sa.Column('material', sa.String(length=100), nullable=True),
    sa.Column('gender', sa.String(length=100), nullable=True),
    sa.Column('type', sa.String(length=100), nullable=True),
    sa.Column('color', sa.String(length=100), nullable=True),
    sa.Column('weight', sa.Integer(), nullable=True),
    sa.Column('price', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('instock', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('shopping_cart_item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('cart_id', sa.Integer(), nullable=True),
    sa.Column('bicycle_id', sa.Integer(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=100), nullable=True),
    sa.Column('username', sa.String(length=1000), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('bicycle_review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('bicycle_id', sa.Integer(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('title', sa.String(length=100), nullable=True),
    sa.Column('review_text', sa.String(length=1000), nullable=True),
    sa.ForeignKeyConstraint(['bicycle_id'], ['bicycles.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bicycle_review')
    op.drop_table('users')
    op.drop_table('shopping_cart_item')
    op.drop_table('shopping_cart')
    op.drop_table('bicycles')
    # ### end Alembic commands ###
